<?php

namespace AppBundle\CommonTasks;

class ArrayServices
{
    /**
     * @param array $array the multi-dimensional array to be flattened
     * @param array $flattenedArray array to add elements to, the returned array after complete flatten
     * @return array one-dimensional flatten array
     */
    public static function flattenArray($array,$flattenedArray = []){
        if(is_array($array) && is_array($flattenedArray)){
            foreach ($array as $key=>$value){
                if(is_array($value)){
                    $flattenedArray = self::flattenArray($value,$flattenedArray);
                }else{
                    $flattenedArray[] = $value;
                }
            }
        }
        return $flattenedArray;
    }
}