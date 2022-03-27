import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './MyAccordion.css';

function MyAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-container">
      <center><h3 className="title-text">Часто задаваемые вопросы</h3></center>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="accordion-title" sx={{ width: '33%', flexShrink: 0, fontFamily: 'Montserrat Medium' }}>
            Как осуществить бронь?
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Montserrat Light' }}>
            Бронирование домиков осуществляется только через модуль бронирования на нашем сайте по предоплате.
            Бронирования являются невозвратными. При отмене бронирования средства
            не возвращаются. Перенос на другие даты не возможен.
            Если у вас возникли вопросы, позвоните по номеру телефона 8 (812) 300 0 300.
            Для того, чтобы разместить бронирование, выберете даты проживания
            и тип домика в модуле бронирования.
            Детей, которым не требуется отдельное спальное место, указывать
            в бронировании не нужно. Нажмите на кнопку «забронировать»,
            введите свои данные: Ф.И.О., номер телефона, эл. почту.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '63%', flexShrink: 0, fontFamily: 'Montserrat Medium' }}>Какой минимальный срок бронирования?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Montserrat Light' }}>
            Минимальный срок бронирования составляет 2 суток, потому что у нас очень классно и вам точно не хватит 1 суток.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'Montserrat Medium' }}>
            Есть ли стоянка для автомобиля?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Montserrat Light' }}>
            Для всех гостей есть бесплатная оборудованая парковка при въезде.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'Montserrat Medium' }}>Что входит в стоимость проживания?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Montserrat Light' }}>
            В стоимость  проживания входят все нештяки.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MyAccordion;
