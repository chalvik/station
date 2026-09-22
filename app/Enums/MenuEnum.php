<?php

namespace App\Enums;

enum MenuEnum: int
{
    case MENU_HEADER = 1;
    case MENU_FOOTER = 2;

    public function toString(): string
    {
        return match ($this) {
            self::MENU_HEADER => __('Header'),
            self::MENU_FOOTER => __('Footer'),
        };
    }
}
