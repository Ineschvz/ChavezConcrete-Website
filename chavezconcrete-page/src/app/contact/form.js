"use client" 

import React, {useState} from "react";


const ContactForm = () => {
    const [name, setName] = useState ('');
    const [last, setLast] = useState ('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('')

//handle change event that will set the setName to the inputs value 
    // const handleChange = (event) =>{
    //   setName(event.target.value);
    //   setLast(event.target.value);
    //   setEmail(event.target.value);
    //   setMessage(event.target.value);
    // };
    const handleChange = (event) => {
      //grabbing id from each lable and the its current value(what ever client puts into text area)
      const { id, value } = event.target;
      //event.trigger is the dom element that triggered the event (aka the input field)

      
      switch (id) {
        //The switch statement is used to perform different actions based on different conditions.
        //in this case it will check the id variable and switch to the updated state 
        case "first_name":
          setName(value);
          break;
        case "last_name":
          setLast(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "message":
          setMessage(value);
          break;
        default:
          break;
      }
    };



//
// const handleSubmit = (event) => {
//    console.log('DATA', {name, last, email, message})
//  }


const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log("DATA", { name, last, email, message });
};



    return ( 
      <div class="grid grid-cols-2 gap-6 py-12">
      <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-black max-w-[600px] text-muted-foreground md:text-xl text-center">First name</label>
          <textarea type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required onChange={handleChange}/>
      </div>
      <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-black max-w-[600px] text-muted-foreground md:text-xl text-center"> Last name </label>
          <textarea type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required onChange={handleChange} />
      </div>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-black max-w-[600px] text-muted-foreground md:text-xl text-center">Email address</label>
        <textarea type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required onChange={handleChange}/>
    </div> 
    <div>
          <label for="topic" class="block mb-2 text-sm font-medium text-black max-w-[600px] text-muted-foreground md:text-xl text-center"> Topic </label>
          <textarea type="text" id="topic" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={handleChange}/>
      </div>
      <div className="col-span-2 mb-6">
<label for="message" class="block mb-2 text-sm font-medium text-black  max-w-[600px] text-muted-foreground md:text-xl text-center">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={handleChange}></textarea>
      </div > 
      <div className="col-span-2 flex justify-center">
      <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded mx-auto items-center" type="submit" >Submit</button>

      </div>
      <div className="text-black">
        map here....  
      </div>
      </div>

    )
};

export default ContactForm;