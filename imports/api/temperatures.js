import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Temperatures = new Mongo.Collection('temperatures');

if(Meteor.isServer){
  Meteor.publish('temperatures',function temperaturesPublication(){
    return Temperatures.find();
  });
}

Meteor.methods({

  'temperatures.insert'(data){
    //Form validation
    check(data.celcius,Number);
    check(data.fahrenheit,Number);

    let insert = {
      celcius: data.celcius,
      fahrenheit: data.fahrenheit,
      timestamp: (new Date())
    }

    Temperatures.insert(insert);
  },

})
