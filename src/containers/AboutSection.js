// import React from 'react';

// const AboutSection = () => {
//   // constructor(props) {
//   //   super(props);
//   //   // Define inline styles
//   //   this.styles = { backgroundColor: props.data.color || '#000' };
//   // }
//   //const { title, icon, details } = this.props.data;
    
//   return (
//     <div className="card-body" >
//       <div className="icon-wrapper section">
//         <span className="icon">
//           <i className={icon} aria-hidden="true"></i>
//         </span>
//       </div>
//       <div className="text-wrapper section">
//         <div className="title"><span>{ title }</span></div>
//         <div className="details"><span>{ details }</span></div>
//       </div>
//     </div>
//   )
// }


// class CardGridView extends React.Component {
//   render() {
//     return (
//       <div className="card-grid-view">
//       {
//         this.props.data.map((cardData, index) => (
//           <Card data={ cardData } key={ "card-id-" + index } />
//         ))
//       }
//       </div>
//     )
//   }
// }

// Placeholder dummy text details
const TEXT_DATA = "Lorem ipsum dolor sit amet, elit. Pellentesque commodo quis enim quis rhoncus. Nunc consectetur adipiscing vel ullamcorper arcu.";

// Static card data
const CARD_DATA = [
  {
    'title': 'Typography',
    'icon': 'fas fa-font',
    'details': "I've studied Typography & Graphic Communication \
                at possibly the best Institution to do so in the \
                world - The University of Reading.",
    'color': '#e75d5d'
  },
  {
    'title': 'Responsive Web Design',
    'icon': 'fas fa-magic',
    'details': 'I design future proof mobile first reponsive websites \
                to the latest web standards. I also keep up with \
                the most recent best practices.',
    'color': '#6fc0d1'
  },
  {
    'title': 'UX Design',
    'icon': 'far fa-user',
    'details': 'User Experience takes precedence throughout \
                my entire process from research, through wireframes \
                to design and development.',
    'color': '#7dc691'
  },
  {
    'title': 'Interaction Design',
    'icon': 'far fa-hand-paper',
    'details': TEXT_DATA,
    'color': '#dfbd42'
  },
  {
    'title': 'Front-end Development',
    'icon': 'fas fa-wrench',
    'details': TEXT_DATA,
    'color': '#d98e64'
  },
  {
    'title': 'Wordpress',
    'icon': 'far fa-edit',
    'details': TEXT_DATA,
    'color': '#de6bae'
  }
]

export default AboutSection;

// import styles from './AboutSection.css';
// import resImg from './asset/res.png';
// import com from './asset/com.png';
// import growth from './asset/growth.png';

// export default function AboutSection() {

//   return (
//     <>
      
//       <h2><strong>My Values</strong></h2>

//       <div className="news">

//         <figure className="article">

//           <img src={growth} />

//           <figcaption>

//             <h3>Growth Mindset</h3>

//             <p>

//         I believe in continuous improvement by staying grounded in self-awareness while both accepting and giving radical candor.

//             </p>

//           </figcaption>

//         </figure>

//         <figure className="article">

//           <img src={com} />

//           <figcaption>

//             <h3>Communication</h3>

//             <p>

//               I listen and hold space for people to feel heard and plan effective communication for community development. 4+ years as a Restorative Justice conflict mediator in the public and private sectors

//             </p>

//           </figcaption>

//         </figure>

//       </div>

      
//     </>
//   );
// }
    
    

// <h3>My Values</h3>
// <section className={styles.container}>
//   <div>
//     <div className={styles.gridItem} >
//       <img src={resImg} alt="illustration of a hand holding a plant with the word responsibility"/>
//       <h4>Responsibility</h4>
//       <p className={styles.AboutP}> I have a deep sense of responsibility to leave the world a better place, which shines through in my personal actions and professional integrity. <br></br> 20+ years volunteering with at risk populations</p>
//     </div>
//   </div>
//   <div>
//     <div className={styles.gridItem}>
//       <img src={com} alt="illustration of communication bubbles with the words conflict resolution and listening."/>
//       <h4>Communication</h4>
//       <p className={styles.AboutP}> I listen and hold space for people to feel heard and plan effective communication for community development. <br></br> 4+ years as a Restorative Justice conflict mediator in the public and private sectors </p>
//     </div>
//   </div>
//   <div>
//     <div className={styles.gridItem}>
//       <img src={growth} alt="illustration of a LED light bulb with the words growth mindset"/>
//       <h4>Growth Mindset</h4>
//       <p className={styles.AboutP}> I believe in continuous improvement by staying grounded in self-awareness while both accepting and giving radical candor. <br></br>Devoted 800+ hours to learning to code in less than 6 months</p>
//     </div>
//   </div>
