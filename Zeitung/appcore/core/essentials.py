"""
Essentials added by the KPW-Times template
"""
from django.http import HttpResponse, FileResponse
from django.template import loader
from django import template


def page_handler(request):
    """
    Page Handler
    Serves STATICS and handles errors
    :param request:
    :return:
    """
    context = {}
    try:
        try:
            load_template = request.path.replace("/", "", 1)
            context['segment'] = load_template
            if '.html' in load_template:
                html_template = loader.get_template(load_template)
                return HttpResponse(html_template.render(context, request))
            else:
                if load_template[-1] != '/':
                    html_template = loader.get_template(load_template + '/index.html')
                    return HttpResponse(html_template.render(context, request))
                else:
                    html_template = loader.get_template(load_template + 'index.html')
                    return HttpResponse(html_template.render(context, request))

        except template.TemplateDoesNotExist:
            try:
                load_path = f"static{request.get_full_path()}"
                if load_path.endswith(".js"):
                    return FileResponse(open(load_path, 'rb'), content_type='text/javascript')
                return FileResponse(open(load_path, 'rb'))
            except:
                html_template = loader.get_template('errorpages/page-404.html')
                return HttpResponse(html_template.render(context, request))
    except:
        html_template = loader.get_template('errorpages/page-500.html')
        return HttpResponse(html_template.render(context, request))