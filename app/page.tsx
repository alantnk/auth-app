import { Nunito } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import { FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

const font = Nunito({
	subsets: ['latin'],
	weight: ['600'],
});

export default function Home() {
	return (
		<main className="flex h-full flex-col jus items-center justify-center gap-7 bg-sky-500">
			<div className="space-y-6 text-center">
				<h1
					className={cn(
						'text-6xl font-semibold text-white drop-shadow-md',
						font.className,
					)}
				>
					🔐 Auth
				</h1>
				<p className="text-white text-lg">um serviço de autenticação simples</p>
				<LoginButton mode="modal" asChild>
					<Button variant="secondary" size="lg">
						Entrar
					</Button>
				</LoginButton>
			</div>

			<div className="text-xs text-white hover:text-blue-200">
				<Link href="https://github.com/alant4k/auth-app" target="_blank">
					<FaBriefcase />
				</Link>
			</div>
		</main>
	);
}
