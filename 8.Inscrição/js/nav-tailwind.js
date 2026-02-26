import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar'
import { Logo } from './logo'

function Example() {
    return (
        <Navbar>
            <Link href="/" aria-label="Home">
                <Logo className="size-10 sm:size-8" />
            </Link>
            <NavbarDivider className="max-lg:hidden" />
            <NavbarSection className="max-lg:hidden">
                <NavbarItem href="/">Home</NavbarItem>
                <NavbarItem href="/events">Events</NavbarItem>
                <NavbarItem href="/orders">Orders</NavbarItem>
            </NavbarSection>
        </Navbar>
    )
}