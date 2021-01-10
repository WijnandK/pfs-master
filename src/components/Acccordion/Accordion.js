import React from 'react';
 
import stud from "../../static/images/stud.svg"
import controller from "../../static/images/controller.svg"
import machine from "../../static/images/machine.svg"
import mboar from "../../static/images/mboar.svg"

const paragraph1 = `2 years of bachelor marketing,  3 years as sales leader in a franchise, responsible for controlling staff and appearence /  of articles. Since 2018 process operater and part time student.`
const paragraph2 = 'Altough I chose marketing as study direction I did always have a passion for computers and technology. I am very competetive , and with an analytical mindset I find the best parts of myself in software development  '
const paragraph3 = 'Novice webdev with Javascript. Has knowledge of Nextjs , Gatsby , Webpack, Nodejs with express, Oauth, Redux, GraphQl, Firebase, and more.. '
const paragraph4 = "korlaarwijnand@hotmail.com  Phone: +31651399175"

const data = [
  {
    title: 'CV & EXPERIENCE', 
    paragraph: paragraph1,  
    imageurl: mboar
  },
  {
    title: 'LEARNING ',
    paragraph: paragraph2,
    imageurl: controller
  },
  {
    title: 'TECHNOLOGY SKILLS',
    paragraph: paragraph3,
     imageurl: machine
  },
  {
    title: 'CONTACT INFO',
    paragraph:paragraph4,
    imageurl: stud
  }
]

class Accordion extends React.Component {
  render () {
    return (
      <div {...{ className: 'accordion_wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        paragraph,
        title,
       
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}> 
            <div {...{ className: 'accordion-item__content' }}>
       
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
            
            </div>
          </div>
      </div>
    )
  }
}

export default  Accordion 