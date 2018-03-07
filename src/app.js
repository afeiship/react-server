import Koa from 'koa';
import setupViewEngine from 'koa-react-view';

const app = new Koa();

setupViewEngine(app, {
  views: `${__dirname}/views`,
  extname: 'js'
});

app.use(async ctx => {
  let url = ctx.request.url;
  console.log(url);
  ctx.state = {
    title: 'Awesome app',
    viewEngine: 'React'
  };
  await ctx.render('home');
});

app.listen(3000, () => {
  console.log(`Server start at: http://localhost:3000`);
});
