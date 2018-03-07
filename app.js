import Koa             from 'koa';
import setupViewEngine from 'koa-react-view';

const app = new Koa();

console.log('app start!');

setupViewEngine(app, {
  views: `${__dirname}/views`,
  extname: 'js'
});

app.use(async ctx => {
  ctx.state = {
    title: 'Awesome app',
    viewEngine: 'React'
  };
  await ctx.render('home');
});

app.listen(3000);
