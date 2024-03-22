const Content = (props) => {
    const {children} = props;
    return (
        <div className="flex w-full flex-col p-5">
            <div className="w-fit">
                <label htmlFor="sidebar-mobile-fixed" className="btn-primary btn sm:hidden">Open Sidebar</label>
            </div>

            <div className="my-4">
                {children}
            </div>
        </div>
    )
}

export default Content;