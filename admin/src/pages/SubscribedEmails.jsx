import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';  

const SubscribedEmails = () => {
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  useEffect(() => {
    // Fetch the list of subscribed emails when the component mounts
    const fetchSubscribedEmails = async () => {
      try {                                
        const response = await axios.get(backendUrl + "/api/newsletter/subscribedEmails"); 
        console.log('API Response:', response.data);

        if (response.data.success) {
          setSubscribedEmails(response.data.subscribedEmails);
        } else {
          toast.error(response.data.message || 'Failed to load subscribed emails');
        }
      } catch (error) {
        console.log('Error while fetching subscribed emails:', error);
        toast.error('Something went wrong while fetching the subscribed emails.');
      }
    };

    fetchSubscribedEmails();
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="my-10">
      <h2 className="text-3xl text-center mb-6">Subscribed Emails</h2>
      <div className="flex flex-col gap-4 px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 text-center border-b py-2">
          <span>Email Address</span>          
        </div>
        {subscribedEmails.length === 0 ? (
          <p className="text-center">No emails are currently subscribed.</p>
        ) : (
          subscribedEmails.map((email, index) => (
            <div key={index} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 py-2 text-center border-b">
              <span>{email.email}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubscribedEmails;
