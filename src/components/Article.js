import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {
    
    function emoji() {
        if (minutes <= 5) {
            return "☕️" 
        } else if (minutes <= 10) {
            return "☕️☕️"
        } else if (minutes <= 15) {
            return "☕️☕️☕️"
        } else if (minutes <= 20) {
            return "☕️☕️☕️"
        } else if (minutes <= 25) {
            return "☕️☕️☕️☕️"
        } else if (minutes <= 30) {
            return "🍱🍱🍱"
        } else if (minutes <= 40) {
            return "🍱🍱🍱🍱"
        } else if (minutes <= 50) {
            return "🍱🍱🍱🍱🍱"
        } else {
            return "🍱🍱🍱🍱🍱🍱"
        }
        
    }
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small> • {emoji()} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
