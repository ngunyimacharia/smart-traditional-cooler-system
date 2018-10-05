import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Temperatures } from '../api/temperatures.js';

import './Temp_table.html';

Template.Temp_table.onCreated(function bodyOnCreated(){
  Meteor.subscribe('temperatures');
});

Template.Temp_table.helpers({
  temperatures() {
    return Temperatures.find({},{sort: {timestamp: -1}});
  },
  getTimeString(timestamp){
    return timestamp.toDateString() + " " + timestamp.toLocaleTimeString();
  },
  tableSettings(){
    return {
      collection: Temperatures,
      rowsPerPage: 7,
      showFilter: false,
      showRowCount: false,
      fields: [
        {
          key:'celcius',
          label:'Celcius',
          sortable:false,
          fn: function (value, object, key) {
            return value + "\u00b0C";
          }
        },
          {
            key:'fahrenheit',
            label:'Fahrenheit',
            sortable:false,
            fn: function (value, object, key) {
              return value + "\u00b0F";
            }
          },
        {
          key:'timestamp',
          label:'Time',
          sortOrder:0,
          sortDirection:'descending',
          fn: function (timestamp, object, key) {
            return timestamp.toDateString() + " " + timestamp.toLocaleTimeString();
          }
        }
      ]
    };
  }
});
