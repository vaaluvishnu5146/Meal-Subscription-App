import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Questions(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className='container mb-5'>
      <h2 className='mb-5 text-center'>Have Questions?</h2>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem className='mb-3'>
          <AccordionHeader targetId="1">What is the concept behind MealSubscription?</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Answer for Question 1.</strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className='mb-3'>
          <AccordionHeader targetId="2">What are all the plans available?</AccordionHeader>
          <AccordionBody accordionId="2">
          <strong>Answer for Question 2.</strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">How to ensure the quality of the meal delivered?</AccordionHeader>
          <AccordionBody accordionId="3">
          <strong>Answer for Question 3.</strong>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Questions;