import s from "./Helper.module.css";
import { useState } from "react";
import avatarConfused from "./avatarConfused.png";
import avatarHappy from "./avatarHappy.png";
import avatarPokerface from "./avatarPokerface.png";
import avatarSmiling from "./avatarSmiling.png";
import ChatBot from "./ChatBot.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDateUser } from "../../Redux/Actions/Home";

export default function Helper() {
	//Declaración de variables
	const user = useSelector((state) => state.homeReducer.User);
	const dispatch = useDispatch();
	let [firstRender, setFirstRender] = useState(true);
	useEffect(() => {
	  if (firstRender === true) {
		dispatch(getDateUser());
		setFirstRender((firstRender =! firstRender));
	  }
	}, [firstRender, dispatch]);
	const [text, setText] = useState("");
	const [chat, setChat] = useState([{ 
	  text: "Hi, i'm Helper. How can I help you?", 
	  image: avatarHappy 
	}])
  
	//Declaración de expresiones
  
	let hello = RegExp("(HI|HOLA|JAI|JELOU|HOLI|HOLIS|HELLO|HOLAA)");
	let greet = RegExp("(HOW ARE YOU|HOW ARE U|HOW R U|HOW R YOU)");
	let good = RegExp("(GOOD|GUD|HAPPY|HAPY|FINE)");
	let password = RegExp("(PASSWORD|PASWORD|PASSWOR|PASWOR)");
	let walletCard = RegExp("(WALLET CARD|CARD WALLET|WALLETCARD|CARDWALLET)");
	let accountData = RegExp(
	  "(NAME|FULL NAME|FULLNAME|IDENTIFICATION|NUMBER|DNI|BIRTH|DATE|ADDRESS|CARD|CVU)"
	);
	let deletee = /DELETE/;
	let help = /HELP/;
	let account = RegExp("(ACCOUNT|ACOUNT|ACCOUNTT|ACONT|ACUNT)");
	let transfer = RegExp(
	  "(TRANSFER|TRANFER|TRANSFERS|TRANFERS|SEND TO|SEND MONEY|TRANSFERENCE|TRANFERENCE)"
	);
	let balance = RegExp("(BALANCE|AMOUNT|GRAPHIC|GRAP|EXPENSES)");
	let contacts = RegExp("(CONTACTS|FRIENDS|USERS)");
	let thanks = RegExp("(THANKS|GRAZIE|GRACIAS|THANK)");
	let bye = RegExp("(CHAO|CHAU|BYE|CHIAO)");
  
  
	function handleChange(e) {
	  e.preventDefault();
	  setText(e.target.value.toUpperCase());
	}
  
	const defaultText = (
	  <p>
		{" "}
		I don't understand what you have just written. Please check that your spelling is OK. <br />
		Or fill in the form <a href="/help/form">
		  here
		</a>{" "}
		so that <br />a customer service representative can contact
		you
	  </p>
	);

	let ImageDefault ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaMvRznx8eGvaifO-QfiBOdbsuHWJvhVxFg&usqp=CAU"

	function sender() {
	  return {
		text: text,
		image: user.user_data.photo? user.user_data.photo : ImageDefault,
	  }
	}  

	function handleSubmit(e) {
		e.preventDefault();
		if (text.length < 1) {
		  return
		} else if (deletee.test(text) && account.test(text)) {
		  let answer = (
			<p>
			  {" "}
			  We are very sorry that you no longer want to <br />
			  be part of the wall-et community. To be able to delete your
			  account <br />
			  go to <a href="/account">ACCOUNT</a> section and click
			  on the <br />
			  "Edit Profile" button. <br />
			  Please, tell us in this <a href="/help">form</a> how we can improve our service.{" "}
			</p>
		  );
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarConfused
			}])
		} else if (help.test(text) && !hello.test(text)) {
		  const answer = <p>
			{" "}
			To get in touch with a customer service representative click
			<a href='/help/form'> here </a> and fill <br />
			in the form with the information  requested {" "}
		  </p>
		  setChat([
			...chat,
			sender(),
			{
			  text: answer,
			  image: avatarPokerface
			}])
		} else if (walletCard.test(text)) {
		  let answer = <p>
			{" "}
			Wall-et Card is a prepaid card that you can use like a <br />
			credit card. You just need to go to the <a href='/walletcard'>
			  WALLET CARD </a> section <br />
			and use the data that appears on the screen. {" "}
		  </p>
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarHappy
			}])
		} else if (balance.test(text)) {
		  let answer = <p>
			{" "}
			To see the balance of your account <br />
			go to the <a href='/balance'> BALANCE </a> section {" "}
		  </p>
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarHappy
			}])
		} else if (contacts.test(text)) {
		  let answer = <p>
			{" "}
			To see the history of users to whom you have made a <br />
			transfer go to the <a href='/contacts'> BALANCE </a> section {" "}
		  </p>
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarHappy
			}])
		} else if (transfer.test(text)) {
		  let answer = (
			<p>
			  {" "}
			  In order to send money to another Wall-et User, <br />
			  go to the <a href="/transfers/1"> TRANSFERS </a> section and
			  click on the "transfer" <br />
			  button. There you can send money to another user just having{" "}
			  <br />
			  their email or their CVU{" "}
			</p>
		  );
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarHappy
			}])
		} else if (password.test(text)) {
		  let answer = (
			<p>
			  {" "}
			  If you need to reset your password, <br />
			  go to the <a href="/account"> Account </a> section <br />
			  and click on the "Change Password" button.
			</p>
		  );
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarHappy
			}])
		} else if (account.test(text) || accountData.test(text)) {
		  let answer = (
			<p>
			  {" "}
			  If you need to change anything of your account information,{" "}
			  <br />
			  go to the <a href="/account">ACCOUNT</a> section and click
			  on the <br />
			  "Edit Profile" button and you will be able to change your
			  account information. <br />
			  Remember that the CVU and the Wall-et Card data cannot be
			  modified.{" "}
			</p>
		  );
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarHappy
			}])
		} else if ( hello.test(text) ) {
		  const answer = <p>Hi, how are you? How can I help you?</p>
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarSmiling
			}])
		} else if (greet.test(text)) {
		  const answer = <p> I'm good. And you? </p>
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarSmiling
			}])
		} else if (good.test(text)) {
		  const answer = <p> I'm happy for you!!! </p>
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarSmiling
			}])
		} else if (thanks.test(text)) {
		  const answer = <p> You're welcome! </p>
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarSmiling
			}])
		} else if (bye.test(text)) {
		  const answer = <p> Bye, I hope I helped you </p>
		  setChat([
			...chat, 
			sender(),
			{
			  text: answer,
			  image: avatarSmiling
			}])
		} else {
		  setChat([
			...chat, 
			sender(),
			{
			  text: defaultText,
			  image: avatarConfused
			}])
		}
	  };
	  return (
		<div className={s.container}>
		  <h1>Wall-et Assistant</h1>
		  {/* <h4>Assistant:</h4> */}
		  <p>{ chat ? <ChatBot array={chat} /> : null}</p> <br/>
		  <form id="areaChat" onChange={handleChange} onSubmit={handleSubmit}>
			<input
			classname={s.textarea}
			  type="text"
			  name="name"
			  value={text}
			  id="txtPregunta"
			  size="50"
			/>
			<button className={s.button} type="submit" name="name" value="submit">
			  Send
			</button>
		  </form>
		  <hr />
		  <p>
			{" "}
			To contact a customer service representative,
			<a href="/help/form" className={s.linkclick}>click here </a>
		  </p>
		</div>
	  );
}
