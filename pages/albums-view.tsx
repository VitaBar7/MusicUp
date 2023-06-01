import { Albums } from '@component/components/albums'

export default function showAlbums() {
    return (
        <main className="flex min-h-screen bg-black flex-col items-center justify-between p-24">
            <Albums/>
        </main>
    )
}