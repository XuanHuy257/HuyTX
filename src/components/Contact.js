import './Contact.css' ;
import Header from './Header';
const Contact=()=>{
    const handle=()=>{
        alert('Cảm ơn bạn đã liên hệ với chúng tôi. Công ty sẽ có phản hổi sớm nhất gửi cho bạn')
    }
    return(
       
        <div class="container1">
             <Header/>
            <form>
            <h1>Contact Us Form</h1>
            <input type="text" id="firstName" placeholder="First Name" required/>
            <input type="text" id="lastName" placeholder="Last Name" required/>
            <input type="email" id="email" placeholder="Email" required/>
            <input type="text" id="mobile" placeholder="Mobile" required/>
            <h4>Type Your Message Here...</h4>
            <textarea required></textarea>
            <input type="submit" value="Send" id="button" onClick={handle}></input>
            </form>
        </div>
       
    )
}
export default Contact;