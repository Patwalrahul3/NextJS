"use client";

import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="h-40 bg-blue-600">
            <div className="flex p-5  justify-between" >


                <div className="text-center">
                    <h1>Welcome to work manager</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nulla saepe mollitia deleniti. Iste, minus perferendis? </p>
                </div>


                <div className="text-center">
                    <h2>Important Links</h2>
                    <ul>
                        <li>
                            <Link href={"#!"}>Facebood</Link>
                        </li>
                        <li>
                            <Link href={"#!"}>Twitter</Link>
                        </li>
                        <li>
                            <Link href={"#!"}>LinkedInn</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer