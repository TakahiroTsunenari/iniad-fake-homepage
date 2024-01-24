// 自動切替したいページのリスト
// ページを追加、ファイル名を変更した場合はここを変更する
const signagePages = ['index.html','map.html'];

// 次のページに切り替わるまでの秒数
const timeoutSeconds = 5;

const currentPage = location.pathname.split('/')[2];
const nextPageIndex = signagePages.indexOf(currentPage)+1;
const numberOfPages = signagePages.length;
let nextPage = '';

// 次のページが要素数を超えてしまったら、最初のページへ
if (nextPageIndex >= numberOfPages){
    nextPage = signagePages[nextPageIndex - numberOfPages];
}else{
    nextPage = signagePages[nextPageIndex];
}

// 指定秒後に次のページへ
setTimeout(function(){
    window.location.href = nextPage;
  }, timeoutSeconds*1000);
