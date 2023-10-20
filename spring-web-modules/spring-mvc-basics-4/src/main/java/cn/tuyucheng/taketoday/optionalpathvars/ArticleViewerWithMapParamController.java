package cn.tuyucheng.taketoday.optionalpathvars;

import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/mapParam")
public class ArticleViewerWithMapParamController {

    @RequestMapping(value = {"/article", "/article/{id}"})
    public Article getArticle(@PathVariable Map<String, String> pathVarsMap) {

        String articleId = pathVarsMap.get("id");

        if (articleId != null) {
            return new Article(Integer.valueOf(articleId));
        } else {
            return Article.DEFAULT_ARTICLE;
        }
    }

}