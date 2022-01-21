import { AiFillBulb } from "react-icons/ai";
function Footer() {
	return (
		<div className="fixed bottom-0 left-0 w-full h-16 bg-white flex justify-center items-center">
			<h1 className="text-sm text-blue-900 mr-2">Desenvolvido Por</h1>{" "}
			<AiFillBulb className="text-black" />
			<h1 className="text-sm text-blue-900 ml-2">

				<a href="#" className="cursor-pointer font-semibold">
                 B&F <span className="text-blue-500">Consultoria</span>
				</a>
			</h1>
		</div>
	);
}

export default Footer;