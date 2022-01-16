import React, { useContext, useState } from 'react'
import {Context} from '../utils/context/index'
import DatePicker from 'react-date-picker';

export const DateTimePicker = (props) => {
    const [value, setValue] = useState(new Date())
    const { dataContext, setDataContext } = useContext(Context)
    
    // Format date to french standard
    const formatDate = (elt) => {
        const day = elt.getDate().toString().length < 2 ? '0'+ elt.getDate() : elt.getDate()
        const mounth = elt.getMonth().toString().length < 2 ? `0${elt.getMonth() + 1}` : elt.getMonth() + 1
        const year = elt.getFullYear()
        const date = `${day}/${mounth}/${year}`
        return date
    }
    // handle change when user select new value
    const handleChange = (e) => {
        setValue(e)
        switch (props.name) {
            case 'birth':
                setDataContext({
                    ...dataContext,
                    dateOfBirth: formatDate(value)
                })
                break;
            case 'start':
                setDataContext({
                    ...dataContext,
                    startDate: formatDate(value)
                })
                break;
        
            default:
                throw new Error()
        } 
   }


  
  return <DatePicker 
          onChange={handleChange}
          value={value}
          />
}