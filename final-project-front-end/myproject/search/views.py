from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import SearchQuery
import json

@csrf_exempt
def add_search_query(request):
    if request.method == 'POST':
        # Extract data from the request body
        data = json.loads(request.body)
        query_text = data.get('query')

        # Create a new SearchQuery instance
        if query_text:
            search_query = SearchQuery.objects.create(query=query_text)
            return JsonResponse({"message": "Search query added successfully."}, status=201)
        else:
            return JsonResponse({"error": "Query parameter is missing."}, status=400)
    else:
        return JsonResponse({"error": "Only POST requests are allowed."}, status=405)

def latest_search_queries(request):
    latest_search_queries = SearchQuery.objects.order_by('-created_at')[:5]
    output = ', '.join([query.query for query in latest_search_queries])
    return JsonResponse({"output": output})