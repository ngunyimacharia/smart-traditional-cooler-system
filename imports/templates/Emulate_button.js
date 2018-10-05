import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';

import './Emulate_button.html';

Session.set("emulateState",false);

Template.Emulate_button.helpers({
  emulateState(){
    return Session.get("emulateState");
  },
  emulateStateFctn(){
    if(Session.get("emulateState") == false){
      return false;
    }else{
      return true;
    }
  }
});

Template.Emulate_button.events({
  'click #emulate'(event) {
    if(Session.get("emulateState") == false){
      Session.set("emulateState",true);
      startEmulating();
    }else{
      Session.set("emulateState",false);
    }
  },
});

function startEmulating(){
  //insert temperature record
  let tempRecord = {
    celcius: Math.round((Math.random()*90)*100) / 100,
    fahrenheit: Math.round((Math.random()*90)*100) / 100,
    timestamp: (new Date())
  }
  Meteor.call('temperatures.insert',tempRecord);
  //insert humidity record
  let humRecord = {
    humidity: Math.round((Math.random()*90)*100) / 100,
    timestamp: (new Date())
  }
  Meteor.call('humidities.insert',humRecord);
  if(Session.get("emulateState")){
    setTimeout(function(){startEmulating();},2000);
  }
}
