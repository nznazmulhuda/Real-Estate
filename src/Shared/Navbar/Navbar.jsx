import { Link, NavLink } from "react-router-dom";

function Navbar() {
	const links = (
		<>
			<li>
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						isActive
							? "font-lato font-medium text-md border border-transparent bg-yellow-400 hover:bg-yellow-500 ease-in-out hover:text-black hover:font-semibold"
							: "font-lato font-medium text-md border border-yellow-400 hover:bg-yellow-400 ease-in-out"
					}
				>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink
					to={"/blog"}
					className={({ isActive }) =>
						isActive
							? "font-lato font-medium text-md border border-transparent bg-yellow-400 hover:bg-yellow-500 ease-in-out hover:text-black hover:font-semibold"
							: "font-lato font-medium text-md border border-yellow-400 hover:bg-yellow-400 ease-in-out"
					}
				>
					blog
				</NavLink>
			</li>

			<li>
				<NavLink
					to={"/about"}
					className={({ isActive }) =>
						isActive
							? "font-lato font-medium text-md border border-transparent bg-yellow-400 hover:bg-yellow-500 ease-in-out hover:text-black hover:font-semibold"
							: "font-lato font-medium text-md border border-yellow-400 hover:bg-yellow-400 ease-in-out"
					}
				>
					About
				</NavLink>
			</li>

			<li>
				<NavLink
					to={"/contact"}
					className={({ isActive }) =>
						isActive
							? "font-lato font-medium text-md border border-transparent bg-yellow-400 hover:bg-yellow-500 ease-in-out hover:text-black hover:font-semibold"
							: "font-lato font-medium text-md border border-yellow-400 hover:bg-yellow-400 ease-in-out"
					}
				>
					Contact
				</NavLink>
			</li>
		</>
	);

	return (
		<>
			<div className="z-[9999]">
				<div className="navbar bg-base-100 container mx-auto mt-2">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
							>
								{links}
								<li className="flex lg:hidden">
									<Link
										to={"/login"}
										className="text-md font-semibold border px-5 py-2 rounded-lg font-lato border-yellow-400 transition-all hover:bg-yellow-400 ease-in"
									>
										Login
									</Link>
								</li>
							</ul>
						</div>
						<Link
							to={"/"}
							className="btn btn-ghost text-2xl font-lato"
						>
							Dream Dwellings
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1 space-x-3">
							{links}
						</ul>
					</div>
					<div className="navbar-end hidden lg:flex">
						<Link
							to={"/login"}
							className="text-xl font-semibold border px-5 py-2 rounded-lg font-lato border-yellow-400 transition-all hover:bg-yellow-400 ease-in"
						>
							Login
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
