import {createPortal} from 'react-dom'
import { useEffect, useState } from 'react';
import styles from './Card.module.css'
import {ExtendedCard, CompressedCard} from './CardItems.jsx';


export default function Card(){
    const [activeCard, setActiveCard] = useState(null);
    function handleActiveCard(index){
        setActiveCard(cardData[index]);
    }
 
    function ExitPopup(){
        setActiveCard(null);
    }

    useEffect(() => {document.body.style.overflow=activeCard?"hidden":"auto";
    return() =>{document.body.style.overflow="auto";}
    }, [activeCard]);
    
    //#region extended cards data

   const cardData = [
    {
        title: 'Creative Solutions',
        text: 'I specialize in turning unique ideas into functional and beautiful web experiences. Every project is crafted with precision and a touch of creativity to solve real-world problems effectively.',
        imageUrl: '/24.png',
        
    },
    {
        title: 'Web Development Projects',
        text: 'Take a deep dive into the projects I’ve worked on, ranging from interactive landing pages to full-fledged web applications. Each showcases my expertise and commitment to quality.',
        imageUrl: 'https://avatar.iran.liara.run/public/44',
    },
    {
        title: 'Skills & Expertise',
        text: 'With a strong foundation in React, JavaScript, and CSS, I build scalable and maintainable web solutions. My passion for clean code ensures every project is a step toward excellence.',
        imageUrl: 'https://avatar.iran.liara.run/public/44',
    },
    {
        title: 'Testimonials',
        text: 'Don\'t just take my word for it! Read what clients and colleagues have to say about working with me, including stories of collaboration and impactful results.',
        imageUrl: 'https://avatar.iran.liara.run/public/28',
    },
    {
        title: 'Get in Touch',
        text: 'Have a project idea or a challenging problem to solve? I’d love to discuss how we can collaborate to bring your vision to life. Let’s connect and create something amazing.',
        imageUrl: 'https://avatar.iran.liara.run/public/28',
    },
    {
        title: 'Bookworm\'s Haven',
        text: 'Reading fuels my imagination and keeps me inspired. Here are a few books that have profoundly influenced my approach to problem-solving and creativity.',
        imageUrl: 'https://avatar.iran.liara.run/public/28',
    },
    {
        title: 'Code & Coffee',
        text: 'My day starts with a hot cup of coffee and a blank code editor. Learn how my caffeine-fueled mornings turn into productive sessions of building amazing projects.',
        imageUrl: 'https://avatar.iran.liara.run/public/28',
    },
    {
        title: 'Game Night Wins',
        text: 'Board games teach strategy and teamwork, which I carry over into my coding life. Explore how my favorite games shape the way I tackle challenges.',
        imageUrl: 'https://avatar.iran.liara.run/public/28',
    },
    {
        title: 'Passion for Design',
        text: 'Design isn’t just about how something looks—it’s how it works. Learn more about how I approach design to create functional and aesthetic solutions.',
        imageUrl: 'https://avatar.iran.liara.run/public/28',
    },
    {
        title: 'My Coding Journey',
        text: 'From writing my first ‘Hello World’ to crafting dynamic web apps, coding has been an exciting journey of growth, challenges, and triumphs.',
        imageUrl: 'https://avatar.iran.liara.run/public/28',
    }];
//#endregion

    return (
        <>
    <div className={styles.card_holder}>
        
        {cardData.map((item, index) => (
            <div className={styles.card_par} key={index} onClick={()=>handleActiveCard(index)}>
                <CompressedCard key={index} title={item.title} imageUrl={item.imageUrl} />
            </div>   
        ))}
    </div>
    {activeCard&&(
        
        <CreatePopup card={activeCard} closePopup={ExitPopup}/>
   
    )}

    
    </>
);
function CreatePopup({card, closePopup}){
    return createPortal(
        <div className={styles.popup_overlay} onClick={closePopup}>
            <div className={styles.card_par} onClick={(e)=>e.stopPropagation()}>
                <ExtendedCard title={card.title} text ={card.text} imageUrl={card.imageUrl}/>
            </div>
        </div>,
        document.getElementById('p_root')    
    );
    
}
}