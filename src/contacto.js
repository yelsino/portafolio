import { useState } from "react";
import ImgEmail from './components/assets/images/email.svg'
import ImgEmail2 from './components/assets/images/email2.svg'
import { useForm, ValidationError } from "@formspree/react";

const Contacto = () => {
const [state, handleSubmit] = useForm("xrgrbdvo");

if (state.succeeded) {
	console.log(state)
}
	const [contacto, setContacto] = useState({
		email:'',
		asunto:'',
		message:''
	})
	const {message, asunto, email} = contacto

	const onChangeForm = (e) =>{
		setContacto({
			...contacto,
			[e.target.name]:e.target.value
		})
		// setContacto({
		// 	...contacto,
		// 	e.target.name:e.target.value
		// })
	}
  return (
		<div className="bg-pri-purple-light flex   h-screen relative justify-center ">
			<h2 className="text-2xl font-black bg-gradient-to-r from-pri-green-light via-pri-light-blue to-pink-500 bg-clip-text text-transparent font-mono texto_comforta block absolute top-5 tracking-widest  text-center bg-red-300 md:hidden">
				contacto
			</h2>

			<div className=" flex flex-col  bottom-10 items-center px-10  h-full justify-center max-w-7xl ">
				<div className="w-44 mb-5 mt-14 md:hidden">
					<img src={ImgEmail} className="" />
				</div>
				<h2 className="text-2xl font-black bg-gradient-to-r from-pri-green-light via-pri-light-blue to-pink-500 bg-clip-text text-transparent font-mono texto_comforta   top-5 tracking-widest  text-center bg-red-300 hidden md:flex mb-10">
					contacto
				</h2>

				<form onSubmit={handleSubmit}>
					<div className="w-full flex flex-col justify-center items-center mb-5 ">
						{email.length > 0 && (
							<label className="text-gray-500  w-full" htmlFor="email">
								Email
							</label>
						)}
						<input
							id="email"
							type="email"
							name="email"
							className="border p-4  rounded-lg bg-pri-purple-light text-white placeholder-gray-400 focus:outline-none border-gray-500 mb-5 w-96"
							placeholder="email"
							onChange={onChangeForm}
							value={email}
						/>
					</div>
					{/*  */}
					<div className="w-full flex flex-col justify-center items-center mb-10">
						{asunto.length > 0 && (
							<label className="text-gray-500 w-full">Asunto</label>
						)}
						<input
							id="asunto"
							type="text"
							name="asunto"
							className="border border-gray-500 p-4 w-96 rounded-lg bg-pri-purple-light text-white placeholder-gray-400 focus:outline-none "
							placeholder="asunto"
							onChange={onChangeForm}
							value={asunto}
						/>
					</div>
					<div className="w-full flex flex-col justify-center items-center mb-5 ">
						{message.length > 0 && (
							<label className="text-gray-500 w-full">Mensaje</label>
						)}
						<textarea
							id="message"
							name="message"
							className="border p-4 bg-pri-purple-light text-white placeholder-gray-400 focus:outline-none rounded-lg border-gray-500 w-96 h-24"
							placeholder="Mensaje"
							onChange={onChangeForm}
							value={message}
						/>
						<div className="text-pink-600 ">
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
						</div>
					</div>

					<button
						onClick={() => {
							setTimeout(() => {
								setContacto({
									email: "",
									message: "",
									asunto: "",
								});
							}, 1000);
						}}
						type="submit"
						disabled={state.submitting}
						className="py-3 px-6  rounded-lg mt-5 border-4 border-pri-light-blue hover:bg-pri-light-blue text-pri-light-blue text-lg font-bold hover:text-black"
					>
						Enviar
					</button>
				</form>
			</div>
			<div className="w-1/2 hidden lg:flex justify-center">
				<img className=" w-full lg:w-8/12" src={ImgEmail2} />
			</div>
		</div>
	);
}
 
export default Contacto;