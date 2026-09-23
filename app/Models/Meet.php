<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meet extends Model
{
    public $fillable = [
        'date',
        'content',
        'short_content',
        'image',
    ];
}
