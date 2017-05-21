<?php
/**
 * Created by PhpStorm.
 * User: mudi
 * Date: 16/05/17
 * Time: 04:20 م
 */

namespace AppBundle\Controller\api;

use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\View\View;
use AppBundle\Entity\Users;

class UsersController extends FOSRestController
{
    /**
     * @Rest\Get("/users/{id}", name="get_user")
     */
    public function getAction($id)
    {
        $singleresult = $this->getDoctrine()->getRepository('AppBundle:Users')->find($id);
        if ($singleresult === null) {
            return new View("user not found", Response::HTTP_NOT_FOUND);
        }
        return $singleresult;
    }
    /**
     * @Rest\Post("/users", name="post_users")
     */
    public function postAction(Request $request)
    {
        $data = new Users;
        $name = $request->get('name');
        $email = $request->get('email');
        $country = $request->get('country');
        $nationality = $request->get('nationality');
        $mobile = $request->get('mobile');
        if(empty($name) || empty($email) || empty($country) || empty($nationality) || empty($mobile))
        {
            return new View("NULL VALUES ARE NOT ALLOWED", Response::HTTP_NOT_ACCEPTABLE);
        }
        $data->setName($name);
        $data->setEmail($email);
        $data->setCountry($country);
        $data->setNationality($nationality);
        $data->setMobile($mobile);
        $em = $this->getDoctrine()->getManager();
        $em->persist($data);
        $em->flush();
        $responseData = ['message'=>'User Added Successfully','data'=>$data];
        return new View($responseData, Response::HTTP_OK);
    }
}