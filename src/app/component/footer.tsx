export function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-[#1c1e22] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shoubham Kushwaha. All rights reserved.
          </p>
          <p className="text-white-500 text-xs mt-2">
            Thanks for visiting! 🚀
          </p>
        </div>
      </footer>
    )
  }
  
  