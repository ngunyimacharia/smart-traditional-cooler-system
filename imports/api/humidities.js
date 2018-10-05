import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Humidities = new Mongo.Collection('humidities');

if(Meteor.isServer){
  Meteor.publish('humidities',function humiditiesPublication(){
    return Humidities.find();
  });
}

Meteor.methods({

  'humidities.insert'(data){
    //Form validation
    check(data.humidity,Number);

    let insert = {
      humidity: data.humidity,
      timestamp: (new Date())
    }

    Humidities.insert(insert);
  },

})
