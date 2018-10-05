import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';

import '../templates/Temp_table.js';
import '../templates/Hum_table.js';
import '../templates/Emulate_button.js';

Template.body.helpers({
  temperatures() {
    let records = [];
    for(var i=0;i<=20;i++){
      let record = {
        celcius: Math.round((Math.random()*60)*100) / 100,
        fahrenheit: Math.round((Math.random()*90)*100) / 100,
        timestamp: (new Date())
      }
      records.push(record);
    }
    return records;
  },
  humidities(){
    let records = [];
    for(var i=0;i<=20;i++){
      let record = {
        humidity: Math.round((Math.random()*90)*100) / 100,
        timestamp: (new Date())
      }
      records.push(record);
    }
    return records;
  },
  getTimeString(timestamp){
    return timestamp.toDateString() + " " + timestamp.toLocaleTimeString();
  }
});

Template.body.events({

});
