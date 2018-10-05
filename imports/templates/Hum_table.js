import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Humidities } from '../api/humidities.js';

import './Hum_table.html';

Template.Hum_table.onCreated(function bodyOnCreated(){
  Meteor.subscribe('humidities');
});


Template.Hum_table.helpers({
  humidities() {
    return Humidities;
  },
  getTimeString(timestamp){
    return timestamp.toDateString() + " " + timestamp.toLocaleTimeString();
  },
  tableSettings(){
    return {
      collection: Humidities,
      rowsPerPage: 7,
      showFilter: false,
      showRowCount: false,
      fields: [
        {
          key:'humidity',
          label:'Reading',
          sortable:false,
          fn: function (value, object, key) {
            return value + "%";
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
