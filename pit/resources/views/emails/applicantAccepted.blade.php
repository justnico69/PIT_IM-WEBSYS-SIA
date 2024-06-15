<!DOCTYPE html>
<html>
<head>
    <title>{{ $subject }}</title>
</head>
<body>
    <img src="{{ $message->embed(public_path('eyesagi.jpg')) }}" alt="Congratulations" style="max-width: 250px; height: auto;">
    <h3>{{ $subject }}</h3>
    <p> {{ $mailMessage }} </p>
    
</body>
</html>
