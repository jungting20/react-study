import Post from '../../models/post';

export const write = async ctx => {
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const read = ctx => {
  const { id } = ctx.params;

  try {
    const post = await Post.findById(id).exec();
    if (!post){
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  }catch(e){
    ctx.throw(500,e)
  }
};
export const remove = ctx => {
  const {id} = ctx.params;
  try{
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  }catch(e){
    ctx.throw(500,e)
  }
  

};
export const update = ctx => {
  const {id} = ctx.params;

  try {
    const post = await Post.findByIdAndUpdate(id,ctx.request.body,{
      new:true
    }).exec()

    if(!post){
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500,e);    
  }

};

export const list = ctx => {};


