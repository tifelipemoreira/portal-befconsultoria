import {isEmpty, isArray} from 'lodash';
//import {sanitize} from '../../../utils/miscellaneous';
import Link from 'next/link';
import NewsletterSubscribe from './NewsletterSubscribe';

export default function Footer ( {footer, footerMenus} )  {
	//console.log(footer.Facebook)
	return (
		<footer className="bg-blue-900 p-4 bottom-0 fixed w-screen" >
			<div className="flex flex-wrap -mx-1 overflow-hidden text-white ">

				{/*Widget One*/}
				<div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
					{/* <div dangerouslySetInnerHTML={{ __html: sanitize( footer?.sidebarOne ) }}/> */}
				</div>

				{/*Widget Two*/}
				<div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
					{/* <div dangerouslySetInnerHTML={{ __html: sanitize( footer?.sidebarTwo ) }}/> */}
				</div>

				<div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          {/*Mailchimp Newsletter Subscription*/}
          <NewsletterSubscribe/>
          {/* Footer Menus*/}
					{ ! isEmpty( footerMenus ) && isArray( footerMenus ) ? (
						<ul>
							{ footerMenus.map( footerMenu => (
								<li key={footerMenu?.node?.id}>
									<Link href={footerMenu?.node?.path}>
										<a>
											{footerMenu?.node?.label}
										</a>
									</Link>
								</li>
							) ) }
						</ul>
					) : null }

				</div>
			</div>
			{/*Copyright Text*/}
			<div className="mb-8 mt-8 w-full flex flex-wrap">
				<div className="w-full md:w-1/2 lg:w-1/4 text-white">{footer?.copyrightText ? footer.copyrightText : '© B&F Consultoria 2020'}</div>
				<div className="w-full lg:w-3/4 flex justify-end">
					{ ! isEmpty( footer?.socialLinks ) && isArray( footer?.socialLinks ) ? (
						<ul className="flex items-center">
							
							{ footer.socialLinks.map( socialLink => (
								<li key={ socialLink?.iconName } className="ml-4">
									<a href={socialLink?.iconUrl}>
										{ ( socialLink?.iconName ) }
									</a>
								</li>
							) ) }
						</ul>
					) : <ul><li>nao é</li></ul> }
				</div>
			</div>
		</footer>
	);
};

