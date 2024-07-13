export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400 mx-2">ホーム</a>
            <a href="#" className="hover:text-gray-400 mx-2">プライバシーポリシー</a>
            <a href="#" className="hover:text-gray-400 mx-2">利用規約</a>
            <a href="#" className="hover:text-gray-400 mx-2">お問い合わせ</a>
          </div>
          <div>
            <p className="text-sm">&copy; 2024 My App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  