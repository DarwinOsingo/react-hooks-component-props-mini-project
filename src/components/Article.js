function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const getReadTime = () => {
      const emoji = minutes < 30 ? "☕️" : "🍱";
      const chunk = minutes < 30 ? 5 : 10;
      const count = Math.ceil(minutes / chunk);
      return `${emoji.repeat(count)} ${minutes} min read`;
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date} • {getReadTime()}</small>
        <p>{preview}</p>
      </article>
    );
  }
  export default Article;
  