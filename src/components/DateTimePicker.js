import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

export const DateTimePicker = () => {
  const [value, onChange] = useState(new Date());

  return <DatePicker onChange={onChange} value={value}/>
}