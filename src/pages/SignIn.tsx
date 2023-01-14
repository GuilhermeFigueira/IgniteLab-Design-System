import { Envelope, Lock } from "phosphor-react";
import Logo from "../Logo";
import axios from "axios";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import "../styles/global.css";
import { FormEvent, useState } from "react";

export function SignIn() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);

	async function handleSignIn(event: FormEvent) {
		event.preventDefault();

		await axios.post("/sessions", {
			email: "guibf2004@gmail.com",
			password: "1234567",
		});

		setIsUserSignedIn(true);
	}

	return (
		<div className="w-screen flex-col h-screen bg-gray-900 flex items-center justify-center text-gray-100">
			<header className="flex flex-col items-center">
				<Logo />

				<Heading size="lg" className="mt-4">
					Ignite Lab
				</Heading>
				<Text size="lg" className="text-gray-400 mt-1">
					Faça login e comece a usar!
				</Text>
			</header>

			<form
				onSubmit={handleSignIn}
				className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
			>
				{isUserSignedIn && <Text>Login Realizado</Text>}
				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold "> Endereço de email</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>

						<TextInput.Input
							id="email"
							placeholder="Digite seu email"
						></TextInput.Input>
					</TextInput.Root>
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold ">Sua senha</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>

						<TextInput.Input
							id="password"
							placeholder="********"
						></TextInput.Input>
					</TextInput.Root>
				</label>

				<label htmlFor="remember" className="flex items-center gap-2">
					<CheckBox id="remember" />
					<Text size="sm" className="text-gray-200">
						Lembrar de mim por 30 dias
					</Text>
				</label>

				<Button type="submit" className="mt-4">
					Entrar na plataforma
				</Button>

				<footer className="flex flex-col items-center gap-4 mt-8 ">
					<Text
						asChild
						size="sm"
						className="text-gray-400 underline hover:text-gray-200"
					>
						<a href="">Esqueceu sua senha?</a>
					</Text>
					<Text
						asChild
						size="sm"
						className="text-gray-400 underline hover:text-gray-200"
					>
						<a href="">Não tem uma conta? Crie sua agora</a>
					</Text>
				</footer>
			</form>
		</div>
	);
}
