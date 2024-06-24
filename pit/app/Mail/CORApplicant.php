<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class CORApplicant extends Mailable
{
    use Queueable, SerializesModels;

    public $student;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($student)
    {
        $this->student = $student;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('triplenuniversity@gmail.com', 'NNN_Admission'),
            subject: $this->subject,
        );
    }

    
    public function build()
    {
        return $this->view('emails.applicantCOR')
                    ->subject('Your Certificate of Registration');
    }
}
