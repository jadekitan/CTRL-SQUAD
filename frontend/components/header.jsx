

const Header = () => {
  return (
    <div className="flex pt-8 pl-8 ">
        <form className="flex items-center  w-[50em] bg-white-100">
            <div className="relative  w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 mr-4 pointer-events-none">
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2739 26.5004C7.96463 26.5004 2.01367 20.9804 2.01367 14.2004C2.01367 7.42039 7.96463 1.90039 15.2739 1.90039C22.5833 1.90039 28.5342 7.42039 28.5342 14.2004C28.5342 20.9804 22.5833 26.5004 15.2739 26.5004ZM15.2739 3.70039C9.02545 3.70039 3.9542 8.41639 3.9542 14.2004C3.9542 19.9844 9.02545 24.7004 15.2739 24.7004C21.5225 24.7004 26.5937 19.9844 26.5937 14.2004C26.5937 8.41639 21.5225 3.70039 15.2739 3.70039Z" fill="#A5B3CD"/>
                    <path d="M28.8574 27.6999C28.6116 27.6999 28.3658 27.6159 28.1717 27.4359L25.5844 25.0359C25.4039 24.8666 25.3027 24.638 25.3027 24.3999C25.3027 24.1618 25.4039 23.9333 25.5844 23.7639C25.9595 23.4159 26.5805 23.4159 26.9557 23.7639L29.5431 26.1639C29.9182 26.5119 29.9182 27.0879 29.5431 27.4359C29.349 27.6159 29.1032 27.6999 28.8574 27.6999Z" fill="#A5B3CD"/>
                </svg>

                </div>
                <input
                type="text"
                id="search"
                className="bg-gray-50  text-gray-900 text-lg font-md shadow-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-16 p-4"
                placeholder="Search a transaction"
                required
                />
            </div>
         </form>

         <div className="flex ml-[8em] "> 
            {/* <div className="flex gap-4">
                <img src="/message.svg" alt="logo" />
                <img src="/notification.svg" alt="logo" />
            </div> */}

            <span className="border-1 border-gray-900"></span>

            <div className="flex ml-10">
                 <img src="/avatar.svg" alt="photo" /> 
                 <div className="flex flex-col ml-4 pt-2 mr-8">
                    <p className="text-sm font-medium whitespace-nowrap">Jay Hargudson</p>
                    <p className="text-sm font-light ">Manager </p>
                 </div>
            </div>

            <button type="button">
                <img src="/icon.svg" alt="icon" />
            </button>

            
         </div>
    </div>
  )
}

export default Header