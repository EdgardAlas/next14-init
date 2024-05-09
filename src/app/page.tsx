import { Button } from '@components/ui/button';

export default function Home() {
	return (
		<main>
			<header className='flex min-h-96 flex-col items-center justify-center gap-4 bg-gray-100 py-2 sm:py-12'>
				<h1 className='text-2xl font-bold sm:text-4xl'>Next.js 14 template</h1>
				<Button>This is a button from shadcn</Button>
			</header>
		</main>
	);
}
