import { useState } from 'react';
import Cookies from 'js-cookie';

export default function useCookie() {
   const [value, setValue] = useState();

   const getCookie = name => {
      Cookies.get(name);
   };

   const addCookie = (name, defaultValue, options) => {
      const cookie = Cookies.get(name);
      if (cookie) {
         setValue(cookie);
      } else {
         Cookies.set(name, defaultValue, options);
         setValue(defaultValue);
      }
   };

   const updateCookie = (name, newValue, options) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
   };

   const deleteCookie = name => {
      Cookies.remove(name);
      setValue(null);
   };

   return { value, addCookie, updateCookie, deleteCookie, getCookie };
}
