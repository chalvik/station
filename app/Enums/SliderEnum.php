<?php

namespace App\Enums;

enum SliderEnum: int
{
    case SLIDER_HEADER = 1;

    public function toString(): string
    {
        return match ($this) {
            self::SLIDER_HEADER => __('Slider Header'),
        };
    }
}
