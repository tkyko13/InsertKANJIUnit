exports.handler = async (event, context) => {
  // console.log(event.queryStringParameters);
  try {
    const kanjiUnit = [
      '万', '億', '兆', '京', '垓', '𥝱', '穰', '溝', '澗', '正', '載', '極', '恒河沙', '阿僧祇', '那由他', '不可思議', '無量大数'
    ];

    let numStr = String(event.queryStringParameters.num);
    let j = numStr.length;
    for (let i = 0; i < kanjiUnit.length; i++) {
      j -= 4;
      if (j <= 0) break;

      numStr = numStr.slice(0, j) + kanjiUnit[i] + numStr.slice(j);
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html; charset=UTF-8'
      },
      body: numStr,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
};
