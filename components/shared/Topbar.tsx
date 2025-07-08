import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { Organization } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
function Topbar() {
    const isUserLoggedIn=true;
    return (
        <>
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
            <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
            <p className="text-heading3-bold text-light-1 max-xs:hidden">TweetStreet</p>
            </Link>
          <div className="flex items-center gap-1">
            <div className="block md:hidden">
                
                <SignedIn>
<SignOutButton redirectUrl='/sign-in'>
    <div className="flex cursor-pointer">
        <Image 
src="/assets/logout.svg"
alt="logout"
width={24}
height={24}
        ></Image>
    </div>
</SignOutButton>
                </SignedIn>
            </div>
            <OrganizationSwitcher
            appearance={{ 
                baseTheme:dark,
                elements:{
                organizationSwitcherTrigger:"py-2 px-4"

            }}}
            >

            </OrganizationSwitcher>
          </div>
        </nav>
        </>
    )
}
export default Topbar;