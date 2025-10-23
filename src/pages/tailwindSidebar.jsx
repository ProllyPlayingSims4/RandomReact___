export function SideBar() {
    return (
        <div className="flex">
            <div className="transform-all ease-in-out delay-100 duration-1000 bg-blue-500 md:bg-amber-500  md:w-96 w-0 h-screen">
                Sidebar
            </div>
            <div className="bg-red-500 md:bg-orange-200 w-full h-screen">
                Content
            </div>
        </div>
    )
}