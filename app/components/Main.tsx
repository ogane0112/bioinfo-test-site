import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row">
      <article className="md:w-3/4 w-full bg-gray-200 p-4">
        {/* 左にある要素 */}
        <p>ここに左の要素が入ります</p>
      </article>
      <aside className="md:w-1/4 w-full bg-gray-100 p-4">
        {/* サイドバー */}
        <p>ここにメニューバーが入ります</p>
      </aside>
    </main>
  );
};

export default Main;

