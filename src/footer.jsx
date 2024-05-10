function Footer(){

    return(
        <footer>
        <div className=" p-10 items-center border shadow md:flex-row  dark:border-gray-700 dark:bg-black">
            <div className=" text-white grid grid-cols-3 gap-4 m-5">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Our Team</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <ul>
                    <li><a href="https://discord.gg/sudors">Discord server</a></li>
                    <li><a href="https://twitter.com/sudoUwU">Twitter/X</a></li>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Secret stuff</a></li>
                </ul>
            </div>
        </div>
        </footer>
    );

}
export default Footer