import {Button} from "@/components/ui/button";


const Footer = () => {
    return (
        <footer className="text-white bg-[#16161b] h-[500px] pt-[32px] flex flex-col justify-between">
            <div className="flex justify-between items-center w-full px-[168px] h-20 border-b-[1px]">
                <div className="pb-[32px]">
                    <h2 className="font-bold text-4xl">Consiga aquele freela com <span className="text-indigo-500">Resolvi Profissional</span>
                    </h2>
                    <p>Monte agora mesmo seu portifólo.</p>
                </div>

                <Button variant="outline" className="text-indigo-900">Quero ser profissional</Button>
            </div>

            <div className="flex justify-between items-center w-full px-[168px] pb-[16px]">
                <div className="flex items-center gap-[16px]">
                    <img src="/img/logo.svg" alt="Logo Resolvi"/>
                    <p>© 2025 Resolvi, Inc.</p>
                </div>

                <p>Todos direitos reservados</p>

                <p>🗺 Brasil, PE</p>
            </div>
        </footer>
    )
}

export default Footer;