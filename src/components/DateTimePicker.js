import React, { useContext, useState } from 'react'
import {Context} from '../utils/context/index'
import DatePicker from 'react-date-picker';

export const DateTimePicker = (props) => {
    const [value, setValue] = useState(new Date())
  const { dataContext, setDataContext } = useContext(Context)

  const handleChange = (e) => {
    setValue(e)
    switch (props.name) {
        case 'birth':
            setDataContext({
                ...dataContext,
                dateOfBirth: value
            })
            break;
        case 'start':
            setDataContext({
                ...dataContext,
                startDate: value
            })
            break;
    
        default:
            throw new Error()
    } 
   }


  
  return <DatePicker 
          onChange={handleChange}
          value={value}
          format='dd-MM-y'
          />
}